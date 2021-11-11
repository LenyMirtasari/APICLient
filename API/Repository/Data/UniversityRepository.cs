﻿using API.Context;
using API.Models;
using API.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository.Data
{
    
    public class UniversityRepository : GeneralRepository<MyContext, University, int>
    {
        private readonly MyContext myContext;
        public UniversityRepository(MyContext myContext) : base(myContext)
        {
            

        }

        /*public int Insert(RegisterVM registerVM)
        {
            myContext.Add(registerVM);
            var result = myContext.SaveChanges();
            return result;
        }*/
    }
}
