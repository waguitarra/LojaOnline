namespace LojaOnline.Dominio.Entidades
{
    public class Produto : Entidade
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public string NomeArquivo { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Nome do produto nao foi informado");

            if (string.IsNullOrEmpty(Nome))
                AdicionarCritica("Descriçao nao foi informado");

        }
    }
}
