using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;

namespace LojaOnline.Web.Controllers
{
    [Route("api/[Controller]")]
    public class ProdutoController : Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio; // = new ProdutoController(new Repositorio.Contexto.QuickBuyContexto())
        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_produtoRepositorio.ObterTodos());
               // if (condicao == false)
               // {
               //     return BadRequest("Errro bla bla bla");
               // }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                _produtoRepositorio.Adicionar(produto); // envia uma lista de produto
                return Created("api/produto", produto); // o produto foi creato em banco sem nenhum erro
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}

