import { customElement, bindable, inject } from 'aurelia-framework';
import { CoinIdentifier} from "app/api/coin-information";
import { WordPressApi, WordPressPost } from "app/api/wordpress";

@inject(WordPressApi)
export class News {
    @bindable public articleId: string = "";
    @bindable public activeCoinIdentifier: CoinIdentifier;
    private posts: Array<WordPressPost> = new Array<WordPressPost>();
    private selectedArticle: WordPressPost;
    constructor(private wordpressApi: WordPressApi) {}

    public async attached() {
        if (this.articleId) {
            this.wordpressApi.getPostById(this.articleId);
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

    private activeCoinIdentifierChanged(newValue, oldValue) {
        this.loadPosts();
    }
}