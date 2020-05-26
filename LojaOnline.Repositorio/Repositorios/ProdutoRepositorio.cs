using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using LojaOnline.Repositorio.Contexto;

namespace LojaOnline.Repositorio.Repositorios
{
    public class ProdutoRepositorio : BaseRepositorio<Produto>, IProdutoRepositorio
    {
        public ProdutoRepositorio(LojaOnlineButContexto lojaOnlineButContexto) : base(lojaOnlineButContexto)
        {
        }
    }
}