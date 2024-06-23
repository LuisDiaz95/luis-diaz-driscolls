export interface News {
  id: number;
  title: string;
  content: string;
}

export const getNews = async () => {
  var response: News[] = [
    {
      id: 1,
      title: "Floods in Monterrey",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel interdum velit. Cras sagittis sagittis magna suscipit pellentesque. Quisque accumsan, enim sed sodales sollicitudin, sem dui semper orci, luctus commodo felis mauris non nisl. Vestibulum nisl leo, volutpat at venenatis quis, vulputate ac ipsum. Integer porta sollicitudin odio, eu venenatis felis bibendum sed. Nulla at ornare lacus, vel rhoncus erat. Aliquam non sollicitudin velit. Nam ornare convallis massa, a consectetur lorem aliquet ut. Nullam urna metus, egestas quis purus in, iaculis viverra sapien.",
    },
  ];
  return response;
};
