
import { inject } from "aurelia-framework";
import { WordPressApi, WordPressPost } from "app/api/wordpress";

@inject(WordPressApi)
export class Bitcoin {
    constructor(private wordpressApi: WordPressApi) { 

    }
    public posts: Array<WordPressPost>;
    
    public async activate() {
                
        this.posts = await this.wordpressApi.getPosts();
        
    }
}