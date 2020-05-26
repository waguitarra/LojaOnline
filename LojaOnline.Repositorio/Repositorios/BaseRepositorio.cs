using LojaOnline.Dominio.Contratos;
using LojaOnline.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LojaOnline.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {

        protected readonly LojaOnlineButContexto LojaOnlineButContexto;

        public BaseRepositorio(LojaOnlineButContexto lojaOnlineButContexto)
        {
            LojaOnlineButContexto = lojaOnlineButContexto;
        }

        public void Adicionar(TEntity entity)
        {
            LojaOnlineButContexto.Set<TEntity>().Add(entity);
            LojaOnlineButContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            LojaOnlineButContexto.Set<TEntity>().Update(entity);
            LojaOnlineButContexto.SaveChanges();
        }

        public void Dispose()
        {
            LojaOnlineButContexto.Dispose();
        }

        public TEntity ObterPorId(int id)
        {
            return LojaOnlineButContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return LojaOnlineButContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            LojaOnlineButContexto.Remove(entity);
            LojaOnlineButContexto.SaveChanges();
        }
    }
}
