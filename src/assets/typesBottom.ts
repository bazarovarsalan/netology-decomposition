export interface IBottomBlocks {
id: number,
title: string,
img?: string,
sections: string | string[]
}


export type BottomBlockProps = {
    content: IBottomBlocks[]
}
