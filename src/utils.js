import sanity from "./client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export const CreateURL = (source, width = 300, heigth = 300) => {
    return builder.image(source).width(width).height(heigth).url()
}

export const FormatDate = date => {
    let newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}
