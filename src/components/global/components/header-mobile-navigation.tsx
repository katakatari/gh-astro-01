import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, getBaseUrl } from "@lib/utils";
import { Button } from "@components/ui/button";
const url = getBaseUrl();

interface Props {
  className?: string;
  navigations: {
    href: string;
    title: string;
  }[];
}
const MobileNavigation = ({ className, navigations }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("", className)}>
        <Button variant="ghost" className="py-0 text-lg">
          Navigation
          <span className="sr-only">Navigation Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        {navigations.map(({ href, title }) => (
          <DropdownMenuItem
            key={href}
          >
            <a href={`${url}/${href}`}>{title}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
