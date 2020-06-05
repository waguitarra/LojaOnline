using LojaOnline.Dominio.Entidades;

namespace LojaOnline.Dominio.Contratos
{
    public interface IUsuarioRepositorio : IBaseRepositorio<Usuario> 
    {
        Usuario Obter(string email, string senha);
        Usuario Obter(string email);
    }
}
