using LojaOnline.Dominio.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LojaOnline.Repositorio.Config
{
    public class UsuarioConfiguration : IEntityTypeConfiguration<Usuario>
    {
        public void Configure(EntityTypeBuilder<Usuario> builder)
        {
            builder.HasKey(u => u.Id);

            //Buider utiliza o padrao Fluent
            builder
                .Property(u => u.Email)
                .IsRequired() // Obrigatorio preenchimento
                .HasMaxLength(50); // Maximo de caracteres de 50


            builder
                .Property(u => u.Senha)
                .IsRequired()
                .HasMaxLength(1000);

            builder
                .Property(u => u.Nome)
                .IsRequired()
                .HasMaxLength(50)        
                ;

            builder
                .Property(u => u.SobreNome)
                .IsRequired()
                .HasMaxLength(50)
                ;
        }
    }
}
