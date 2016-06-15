import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    componentName:"articleListItemComponent",
    template: require("./article-list-item.component.html"),
    styles: [require("./article-list-item.component.scss")],
    selector: "article-list-item",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListItemComponent { }
