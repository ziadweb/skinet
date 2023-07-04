using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Specefications
{
    public class ProductWithFilerWithCountSpecefication : BaseSpecefications<Product>
    {
        public ProductWithFilerWithCountSpecefication(ProductSpecParams productParams)
        : base(x =>
        (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
        (!productParams.brandId.HasValue || x.ProductBrandId == productParams.brandId) &&
        (!productParams.typeId.HasValue || x.ProductTypeId == productParams.typeId))
        {

        }
    }
}