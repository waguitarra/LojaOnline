using System.Collections.Generic;
using System.Linq;

namespace LojaOnline.Dominio.Entidades
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao 
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>());}
        }

        public void LimparMensagensValidacao()
        {
            mensagemValidacao.Clear();
        }

        public void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }
        
        public string ObterMensagensValidacao()
        {
            return string.Join(". ", mensagemValidacao); // Criando uma lista unica de mensagens
        }

        public abstract void Validate();
        public bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }
    }
}
