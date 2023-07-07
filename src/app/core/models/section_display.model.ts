import { Post } from "./post.model";
import { Section } from "./section.model";

export interface SectionDisplay {
  path: Array<Section>;
  sections: Array<Section>;
  section: Section;
  posts: Array<Post>;
}
