class Spiderman{
    constructor(name, age, actor, movies, studio){
        this.name = name;
        this.age = age;
        this.actor = actor;
        this.movies = movies;
        this.studio = studio;
    }

    getInfo(){
        this.actor = "Tom Holland";
        this.studio = "Marvel";
        return `Hey, I'm ${this.actor} from ${this.studio} Studio`
    }

    getActor(){
        this.actor = "Tobey Maguire"
        this.studio = "Marvel"
        return `Soy ${this.actor}, el mejor Spiderman de ${this.studio}`
    }
}

module.exports = Spiderman;