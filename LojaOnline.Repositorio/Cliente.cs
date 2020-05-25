using LojaOnline.Dominio.Entidades;
using LojaOnline.Repositorio.Repositorios;
using System.Runtime.InteropServices.ComTypes;

namespace LojaOnline.Repositorio
{
    public class Cliente
    {
        public Cliente()
        {
            var usuarioRepositorio = new UsuarioRepositorio();
            var produto = new Produto();
            var usuario = new Usuario();

            usuarioRepositorio.Adicionar(usuario);
        }
    }
}
