import styles from './topics.module.css';

// Class does not actually do anything. It is just for display purposes.
class Car {
    constructor(brand) {
        this.brand = brand;
    }
}

// Class does not actually do anything. It is just for display purposes.
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return `This ${this.brand} is a ${this.model}`;
    }

    get carname() {
        return this._carname;
    }

    set carname(x) {
        this._carname = x;
    }
}

const TopicClasses = () => {
    const classesAsString = Car + '\n\n' + Model;

    return (
        <div>
            <h2 className={styles.title}>Classes</h2>

            <div>
                A JS class is not an object but a template for JS objects.
                Classes are not hoisted.
            </div>
            <pre>
                {classesAsString}
            </pre>
        </div>
    );
};

export default TopicClasses;
