using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using LojaOnline.Repositorio.Contexto;

namespace LojaOnline.Repositorio.Repositorios
{
    public class PedidoRepositorio : BaseRepositorio<Pedido>, IPedidoRepositorio
    {
        public PedidoRepositorio(LojaOnlineContexto lojaOnlineContexto) : base(lojaOnlineContexto)
        {

        }
    }
}