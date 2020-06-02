using LojaOnline.Dominio.Entidades;
using LojaOnline.Dominio.ObjetoDeValor;
using LojaOnline.Repositorio.Config;
using Microsoft.EntityFrameworkCore;

namespace LojaOnline.Repositorio.Contexto
{
    public class LojaOnlineContexto : DbContext
    {  

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
        public DbSet<FormaPagamento> FormaPagamentos { get; set; }

        public LojaOnlineContexto(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            ///Classes de Mapeamento aqui
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData(
                                                            new FormaPagamento()
                                                            {
                                                                Id = 1, 
                                                                Nome = "Boleto",
                                                                Descricao = "Forma de Pagamento Boleto"
                                                            },
                                                            new FormaPagamento()
                                                            {
                                                                Id = 2,
                                                                Nome = "Cartao de Credito",
                                                                Descricao = "Forma de Pagamento Cartao de Credito"
                                                            },
                                                            new FormaPagamento()
                                                            {
                                                                Id = 3,
                                                                Nome = "Deposito",
                                                                Descricao = "Forma de Pagamento Deposito"
                                                            }

                                                           );

            base.OnModelCreating(modelBuilder);
        }


    }
}
