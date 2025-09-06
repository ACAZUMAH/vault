export interface navItems {
    label: string,
    route: string
}

export interface headerItems extends navItems {
    
}

export interface DrawerProps {
    opened: boolean,
    onClose: () => void
}