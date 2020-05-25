using System;
using System.Collections.Generic;
using System.Text;

namespace LojaOnline.Dominio.Entidades
{
    public class ItemPedido :Entidade
    {
        public int Id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();

            if (ProdutoId == 0)
                AdicionarCritica("Nao foi identificado qual a referência");

            if (Quantidade == 0)
                AdicionarCritica("Quantidade nao foi informado");

        }


    }
}
