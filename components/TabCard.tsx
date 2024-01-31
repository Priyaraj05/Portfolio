import { Circle } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";

interface tabDataType {
  title: string;
  desc: string;
  date: string;
  tech: string[];
}

export function TabCard({title, desc, date, tech}: tabDataType) {
  return (
    <Card className="w-full mb-2">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {desc}
          </CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          <div className="bg-[#27272a] text-xs p-1 rounded">{date}</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
              {tech.map((techItem, index) =>(
                <li key={index}>
                  <Circle size={10} color="purple" style={{ marginRight: '3px', marginLeft: '10px',  display: 'inline-block'}} />
                  {/* <span style={{ marginRight: '3px', marginLeft: '10px'}}>•</span> */}
                  {techItem}</li>
              ) )}
            </ul>
            {/* <Circle className="mr-1 h-3 w-3  text-purple-400" />
            {tech} */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
