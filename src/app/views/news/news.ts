import { customElement, bindable, inject } from 'aurelia-framework';
import { CoinIdentifier} from "app/api/coin-information";
import { WordPressApi, WordPressPost } from "app/api/wordpress";

@inject(WordPressApi)
export class News {
    @bindable public articleId: string = "";
    @bindable public activeCoinIdentifier: CoinIdentifier;
    @bindable public coinIdentifiers: Array<CoinIdentifier>;
    private posts: Array<WordPressPost> = new Array<WordPressPost>();
    private selectedArticle: WordPressPost;
    constructor(private wordpressApi: WordPressApi) {}

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
            debugger;
            this.posts = await this.wordpressApi.getPostsByCoin(this.activeCoinIdentifier.name);
        } else {
            this.posts = await this.wordpressApi.getPosts();
        }
    }

    private setActiveCoinIdentifierByCategoryName(categoryName: string) {        
        debugger;
        this.coinIdentifiers.forEach( identifier => {
        if (identifier.name == categoryName) this.activeCoinIdentifier = identifier;
        })
    }

    private activeCoinIdentifierChanged(newValue, oldValue) {
        this.loadPosts();
    }
}