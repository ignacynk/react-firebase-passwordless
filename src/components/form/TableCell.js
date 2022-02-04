import {
    Stack, 
    FormLabel, 
    Input 
} from "@chakra-ui/react"

export const TableCell = ({ 
    pathName, register, tableColumnValues, problem, tableDataNames, i 
}) => {
    return(
    <Stack direction={['column', 'row']} mt={2} key={i} md={3}>                
        <FormLabel width='30vw'>{tableColumnValues}</FormLabel>                                
        <Input name={problem===undefined 
            ? `trash.${pathName}Problem[${i}].${tableDataNames}`
            : `table.${pathName}Problem[${i}].${tableDataNames}`}
            type='text'
            placeholder='' 
            ref={register({ maxLength: 80 })} 
            
        />               
    </Stack>
)
}
