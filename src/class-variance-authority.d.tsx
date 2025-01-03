declare module "class-variance-authority" {
    export function cva(
      base?: string,
      options?: {
        variants?: Record<string, Record<string, string>>;
        defaultVariants?: Record<string, string>;
      }
    ): (props?: Record<string, string>) => string;
  
    export type VariantProps<T> = T extends (props?: infer P) => unknown ? P : never;
  }
  