import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SearchFilter'
})
export class SearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) { return null; }
        if (!args) { return value; }

        args = args.toLowerCase();

        return value.filter((item) => {
            let source = JSON.stringify(item.name).toLowerCase()
            return source.replace(/[^a-zA-Z0-9]/g, "").includes(args) || source.includes(args);
        });

    }

}
