using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LojaOnline.Dominio.Contratos;
using LojaOnline.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace LojaOnline.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;
        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }

        [HttpPost("VerificarUsuario")]
        public IActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                //Consultar na base de Dados
                var usuarioRetorno = _usuarioRepositorio.Obter(usuario.Email, usuario.Senha);

                if (usuarioRetorno != null)
                {
                    return Ok(usuarioRetorno);
                }
                return BadRequest("Usuario ou senha invalida");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioCadastrado = _usuarioRepositorio.Obter(usuario.Email);
                
                if (usuarioCadastrado != null)               
                    return BadRequest("Usuario já cadastrado no sistema");    
                
                _usuarioRepositorio.Adicionar(usuario);
                
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}