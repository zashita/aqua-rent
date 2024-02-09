import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";


export interface SidebarProps{
    className?: string;
}
export const Sidebar:React.FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const toggleMode = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button
                onClick={toggleMode}
            >
                Collapse
            </Button>
            <div className={cls.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};

