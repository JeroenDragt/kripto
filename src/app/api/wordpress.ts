import { inject } from "aurelia-framework";
import { HttpClient } from "aurelia-fetch-client";

@inject(HttpClient)
export class WordPressApi {
    constructor(private http: HttpClient) {

    }

    private wordpressRoot: string = "http://www.jdragt.com/Kripto/wp-json/wp/v2/" 

    public async getPosts() {
        let response = await this.http.fetch(this.wordpressRoot + "posts?_embed");
        let posts = await response.json()
        return this.parseResponseToWordpressPost(posts)
    }

    public async getPostsByCoin(categoryName: string)
    {
        let categoryId = await this.getCategoryCode(categoryName);
        let response = await this.http.fetch(this.wordpressRoot +"posts?_embed&categories=" + categoryId) ;
        let posts = await response.json();
        return this.parseResponseToWordpressPost(posts)
    }

    private parseResponseToWordpressPost(posts){
        let parsedPosts = new Array<WordPressPost>();
        posts.forEach(post => {
            parsedPosts.push(new WordPressPost(post.id, post.title.rendered, post.content.rendered, post._embedded["wp:featuredmedia"][0].source_url))
        });
        return parsedPosts;
    }

    private async getCategoryCode(coinName:string)
    {
        let response = await this.http.fetch(this.wordpressRoot + "categories?slug=" + coinName.toLowerCase());
        let category = await response.json();
        return category[0].id;
    }
}

export class WordPressPost {
constructor(
    public id: string,
    public title :string,
    public content: string,
    public featuredImageSrc: string ) {}

}