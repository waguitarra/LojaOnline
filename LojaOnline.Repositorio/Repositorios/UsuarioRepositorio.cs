
using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using LojaOnline.Repositorio.Contexto;
using System.Linq;

namespace LojaOnline.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(LojaOnlineContexto lojaOnlineContexto) : base(lojaOnlineContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return LojaOnlineContexto.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }
    }
}
