export interface TabBarIconProps {
  name: string;
  focused: boolean;
  size: number;
  color: string;
  isPlus?: boolean;
}

export interface ToolProps {
  id: number;
  name: string;
  label: string;
}

export type GridLayout = {
  id: string;
  name: string;
  shape?: "rect" | "heart" | "clover" | "hexagon" | "circle";
  rows: number;
  cols: number;
  layout: number[][];
};

export type Template = {
  id: string;
  name: string;
  image: string;
  placeholders: { x: number; y: number; width: number; height: number }[];
};

export type DesignOption = {
  id: string;
  name: string;
  icon: string;
};

export interface DesignOptionItemProps {
  item: DesignOption;
  onPress: () => void;
}

export interface GridItemProps {
  item: GridLayout;
  onPress: () => void;
}

export interface TemplateItemProps {
  item: Template;
  onPress: () => void;
}
