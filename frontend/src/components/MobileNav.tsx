import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-red-600" />
        <SheetContent className="space-y-3">
          <SheetTitle>
            <span>Welcome to RuhaEats.com!</span>
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex">
            <Button className="flex-1 font-bold bg-red-600">Login</Button>
          </SheetDescription>
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  );
};

export default MobileNav;
