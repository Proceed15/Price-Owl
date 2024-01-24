export interface Category{
    idcategoria: number;
    categoria: string;
    grupos: Group[];
  }
  
  export interface Group {
    idgrupo: number;
    nomegrupo: string;
    nomeProduto:string;
    precoProduto: number;
    avaliacao: number;
    imagemProduto: string;
    
  }