{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/a634c8f6c1fbf9b9730e01764999666f3436f10a.tar.gz") {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-16_x
  ];
}
