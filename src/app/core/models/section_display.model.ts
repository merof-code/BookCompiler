import { Post } from "./post.model";
import { Section } from "./section.model";

export interface SectionDisplay {
  path: Section[];
  sections: Section[];
  section: Section;
  posts: Post[];
}
