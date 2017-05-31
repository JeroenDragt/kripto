import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class WordPressApi {
    constructor(private http: HttpClient) {

    }
    
    private wordpressRoot :string = "http://www.jdragt.com/Kripto/wp-json/wp/v2/" 

    public async getPosts()
    {
        let response = await this.http.fetch(this.wordpressRoot + "posts");
        
        let posts = await response.json()
        
        let parsedPosts = new Array<WordPressPost>();
        posts.forEach(post => {            
            parsedPosts.push(new WordPressPost(post.title.rendered, post.content.rendered))
        });
        return parsedPosts;
        
    }
}

export class WordPressPost {
constructor(public title :string,
public content: string ) {}

}