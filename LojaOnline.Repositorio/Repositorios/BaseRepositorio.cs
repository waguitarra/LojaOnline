using LojaOnline.Dominio.Contratos;
using LojaOnline.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LojaOnline.Repositorio.Repositorios
{
    public class BaseRepositorio<TEntity> : IBaseRepositorio<TEntity> where TEntity : class
    {

        protected readonly LojaOnlineContexto LojaOnlineContexto;

        public BaseRepositorio(LojaOnlineContexto lojaOnlineContexto)
        {
            LojaOnlineContexto = lojaOnlineContexto;
        }

        public void Adicionar(TEntity entity)
        {
            LojaOnlineContexto.Set<TEntity>().Add(entity);
            LojaOnlineContexto.SaveChanges();
        }

        public void Atualizar(TEntity entity)
        {
            LojaOnlineContexto.Set<TEntity>().Update(entity);
            LojaOnlineContexto.SaveChanges();
        }

        public void Dispose()
        {
            LojaOnlineContexto.Dispose();
        }

        public TEntity ObterPorId(int id)
        {
            return LojaOnlineContexto.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> ObterTodos()
        {
            return LojaOnlineContexto.Set<TEntity>().ToList();
        }

        public void Remover(TEntity entity)
        {
            LojaOnlineContexto.Remove(entity);
            LojaOnlineContexto.SaveChanges();
        }
    }
}
