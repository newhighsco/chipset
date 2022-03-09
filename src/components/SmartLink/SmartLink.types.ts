export interface SmartLinkProps {
  href?: string
  target?: React.AnchorHTMLAttributes<HTMLAnchorElement>['target']
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  setRef?: any
  className?: string
  title?: string
  children?: React.ReactNode
}
