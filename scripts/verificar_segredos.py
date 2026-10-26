"""Procura padrões de senha, token e chave privada nos arquivos do repositório."""
import re
import subprocess
import sys
from pathlib import Path

PADROES = {
    "chave privada": re.compile(r"-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----"),
    "chave de acesso AWS": re.compile(r"AKIA[0-9A-Z]{16}"),
    "token do GitHub": re.compile(r"gh[pousr]_[A-Za-z0-9]{36,}"),
    "senha ou token no código": re.compile(
        r"(?i)(senha|password|passwd|secret|token|api[_-]?key)['\"]?\s*[:=]\s*['\"][^'\"\s]{4,}['\"]"
    ),
}

TAMANHO_MAXIMO = 1_000_000  # ignora arquivos com mais de 1 MB


def listar_arquivos():
    resultado = subprocess.run(
        ["git", "-c", "core.quotepath=false", "ls-files"],
        capture_output=True, text=True, encoding="utf-8", check=True,
    )
    return [linha for linha in resultado.stdout.splitlines() if linha]


def verificar(caminho):
    achados = []
    arquivo = Path(caminho)
    if not arquivo.is_file() or arquivo.stat().st_size > TAMANHO_MAXIMO:
        return achados
    dados = arquivo.read_bytes()
    if b"\0" in dados:  # arquivo binário (imagem, por exemplo)
        return achados
    texto = dados.decode("utf-8", errors="ignore")
    for numero, linha in enumerate(texto.splitlines(), start=1):
        for nome, padrao in PADROES.items():
            if padrao.search(linha):
                achados.append((caminho, numero, nome))
    return achados


def main():
    arquivos = listar_arquivos()
    achados = []
    for caminho in arquivos:
        if caminho == "scripts/verificar_segredos.py":
            continue
        achados.extend(verificar(caminho))

    print(f"Arquivos verificados: {len(arquivos)}")
    if not achados:
        print("Nada encontrado.")
        return 0
    print(f"Possíveis segredos encontrados: {len(achados)}")
    for caminho, numero, nome in achados:
        print(f"  {caminho}:{numero}  ({nome})")
    return 1


if __name__ == "__main__":
    sys.exit(main())