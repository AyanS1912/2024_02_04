function create_Node(data){
    return {
        value : data,
        next : null
    }
}

function create_LinkedList(arr){

    if(arr.length === 0){
        return null;
    }

    const head = create_Node(arr[0]);
    let curr = head;

    for(let i = 1;i< arr.length; i++){
        curr.next = create_Node(arr[i]);
        curr = curr.next;
    }

    return head;
}

function get_head(linked_list){
    return linked_list;
}

function add_ele(linked_list,value){
    let new_ele = create_Node(value);
    let curr = get_head(linked_list);
    
    while(curr.next !== null){
        curr = curr.next;
    }

    curr.next = new_ele;
}

function get_len(linked_list){
    var count = 0;
    let curr = linked_list;
    while(curr !== null){
        curr = curr.next;
        count += 1;
    }

    return count;
}

function print_list(head){
    let curr = head;
    res = '';
    while(curr !== null){
        if(curr.next == null){
            res +=`${curr.value}`;
            // console.log(curr.value);
            break;
        }
        res += `${curr.value}->`;
        // console.log(`${curr.value}->`);
        curr =  curr.next;
    }
    console.log(res);
}


// let input = prompt('Enter the value for linked list');
// let arr = arr.split(',');

arr = [1,5,3,8,6];

let linked_list = create_LinkedList(arr);
print_list(linked_list);
// console.log(get_len(linked_list));   
add_ele(linked_list,11);
// console.log(get_len(linked_list));
print_list(linked_list);