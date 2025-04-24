/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface IPage {
    title: string;
}
class Component<T> {
    constructor(public props: T) {}
}

class Page extends Component<IPage> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
