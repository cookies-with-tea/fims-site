import { useState } from "react"
import { Button } from "src/ui/button/Button"
import { Icon } from "src/ui/icon/Icon"
import { Input } from "src/ui/input/Input.tsx"
import stl from "./uikit.module.scss"


export const Uikit = () => {
    const [value, setValue] = useState("")
    return (
        <div className={stl.uikit}>
            <div className={stl["d-f"]}>
                <Button>
                    Вход
                </Button>

                <Button
                    variant="secondary"
                    size="sm"
                    >
                    Вход
                </Button>

                <Button
                    size="xs"
                    radius="max"
                    >
                    Вход
                </Button>

                <Button postfixIcon={<Icon name="filter"/>}>
                    Вход
                </Button>

                <Button prefixIcon={<Icon name="filter"/>}>
                    Вход
                </Button>

                <Button disabled={true}>
                    Вход
                </Button>
            </div>

            <div style={{margin:"20px 0"}}>
                <Button
                    prefixIcon={<Icon name="filter"/>}
                    href="/"
                    >
                    Вход
                </Button>
            </div>

            <div style={{fontSize:"30px"}}>
                <Icon name="filter"/>

                <Icon name="clear"/>

                <Icon name="eye-off"/>

                <Icon name="eye-on"/>
            </div>

            <div>
                <Input
                    value={value}
                    placeholder="вход"
                    onChange={setValue}
                />
                <Input
                    value={value}
                    placeholder="вход"
                    onChange={setValue}
                    clearable={true}
                    size="sm"
                />
                <Input
                    value={value}
                    placeholder="вход"
                    onChange={setValue}
                    size="xs"
                    type="password"
                />

                <Input
                    value={value}
                    placeholder="вход"
                    onChange={setValue}
                    postfixIcon={<Icon name="filter"/>}
                    prefixIcon={<Icon name="filter"/>}
                />

                <Input
                    value={value}
                    placeholder="вход"
                    onChange={setValue}
                    append={"Open"}
                    prepend={"Open"}
                />
            </div>
            <div>
                <Input
                    type="textarea"
                    placeholder="вход"
                    disabled={true}
                    value={value}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}
