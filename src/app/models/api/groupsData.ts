export interface GroupsData {
    nomegrupo: string;
    precomediogrupo: string;
    maisbarato: {
        idProduto: number;
        descricaoProduto: string;
        precoProduto: number;
        imagemProduto: string;
        avaliacaoProduto: string;
        dataAdicaoProduto: string;
        dataAlteracaoProduto: string;
        linkProduto: string;
        nomeFornecedor: string;
        logoFornecedor: string;
    };
    produtos: {
        idProduto: number;
        descricaoProduto: string;
        precoProduto: number;
        imagemProduto: string;
        avaliacaoProduto: number;
        dataAdicaoProduto: string;
        dataAlteracaoProduto: string;
        linkProduto: string;
        nomeFornecedor: string;
        logoFornecedor: string;
    }[];
}
