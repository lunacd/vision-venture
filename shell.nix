{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/2d474d6a4a43a0348b78db68dc00c491032cf5cf.tar.gz") {}
}:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-16_x
  ];
}
