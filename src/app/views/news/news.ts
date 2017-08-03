import {Router} from "aurelia-router";
import { customElement, bindable, inject } from 'aurelia-framework';
import { CoinIdentifierList, CoinIdentifier} from "app/api/coinIdentifierList";
import { WordPressApi, WordPressPost } from "app/api/wordpress";

@inject(WordPressApi, CoinIdentifierList, Router)
export class News {
    @bindable public articleId: string = "";
    @bindable public activeCoinIdentifier: CoinIdentifier;    
    private posts: Array<WordPressPost> = new Array<WordPressPost>();
    private selectedArticle: WordPressPost;
    constructor(private wordpressApi: WordPressApi, public coinIdentifierList: CoinIdentifierList, public router: Router) {
       
    }

    public async attached() {        
        if (this.articleId) {            
            this.selectedArticle = await this.wordpressApi.getPostById(this.articleId);
            this.setActiveCoinIdentifierByCategoryName(this.selectedArticle.categoryName);
        }
        else {
            this.loadPosts();
        }
    }

    private async loadPosts() {
        
        if (this.activeCoinIdentifier) {            
            this.posts = await this.wordpressApi.getPostsByCoin(this.activeCoinIdentifier.name);
        } else {
            this.posts = await this.wordpressApi.getPosts();
        }
    }

    private setActiveCoinIdentifierByCategoryName(categoryName: string) {        
        this.coinIdentifierList.coinIdentifiers.forEach( identifier => {
        if (identifier.name == categoryName) this.activeCoinIdentifier = identifier;
        })
    }

    private activeCoinIdentifierChanged(newValue, oldValue) {
        this.loadPosts();
    }

    public async selectArticle(id) {        
        this.router.navigateToRoute("article",{"id": id } )
    }

    public async articleIdChanged(newValue, oldValue) {
        if(newValue) {
            debugger;
            this.selectedArticle = await this.wordpressApi.getPostById(newValue);   
        } else {
            this.selectedArticle = undefined;
        }        
    }

    public closeSelectedArticle() {
        this.selectedArticle = undefined;
        this.router.navigateToRoute("overview");
    }
}