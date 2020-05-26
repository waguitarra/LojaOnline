
using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using LojaOnline.Repositorio.Contexto;

namespace LojaOnline.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(LojaOnlineButContexto lojaOnlineButContexto) : base(lojaOnlineButContexto)
        {
        }
    }
}
