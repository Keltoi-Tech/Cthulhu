import {CharType,StringType,NumberType,FloatType,BooleanType, DateType} from './util.js';

export class ViewModel{
    constructor(node,modelName=undefined){
        if (!!modelName)
            this.nodes = node.querySelectorAll('[data-model=' + modelName + ']');
        else
            this.nodes = node;
    }

    getField=field=>{
        let input = field.querySelector('[data-scope]');
        let val;
        switch(input.dataset.scope){
            case 'char':val = CharType(input.value);break;
            case 'string':val = StringType(input.value);break;
            case 'number':val=NumberType(input.value);break;
            case 'float':val=FloatType(input.value);break;
            case 'bool':val=BooleanType(input.checked);break;
            case 'date':val=DateType(input.value);break;
        }
        return val;
    }

    get=()=>{
        let model = {}
        let childs = this.nodes.querySelectorAll('fieldset[data-field]');
        for(let child of childs){
            if (!!child.dataset.field){
                model[child.dataset.field] = this.getField(child);
            }
        }
        return model;
    }

    list=()=>{
        
        let models=[];
        for(let node of this.nodes)
        {
            models.push(new ViewModel(node).get());
        }
        return models;
    }

    setList=(models)=>{
        models.forEach((model,i)=>{
            new ViewModel(this.nodes[i]).set(model);
        })
    }

    set=model=>{
        let fields = Object.keys(model);

        fields.forEach(field=>{
            this
            .nodes
            .querySelector('[data-field=' + field + ']')
            .querySelector('[data-scope]')
            .value = model[field];
        });
    }

}