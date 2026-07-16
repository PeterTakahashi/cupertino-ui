import { SearchXIcon } from "lucide-react";
import { Button } from "@/registry/cupertino-ui/button";
import { ContentUnavailable } from "@/registry/cupertino-ui/content-unavailable";

export default function ContentUnavailableDemo() {
  return (
    <ContentUnavailable
      icon={<SearchXIcon />}
      title="No Results"
      description={'No results found for "swiftui". Check the spelling or try a new search.'}
    >
      <Button variant="tinted" size="sm">
        Clear Search
      </Button>
    </ContentUnavailable>
  );
}
