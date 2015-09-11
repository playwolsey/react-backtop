import React from 'react';

const Backtop = React.createClass({
    backtop() {
        let backtop = React.findDOMNode(this.refs.backtop);

        (function smoothscroll() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();

        backtop.style.display = 'none';
    },

    handleScroll() {
        let backtop = React.findDOMNode(this.refs.backtop);

        if (window.pageYOffset < window.innerHeight) {
            backtop.style.display = 'none';
        } else {
            backtop.style.display = 'block';
        }
    },

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    },

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    render() {
        let style = {
            display: 'none',
            position: 'fixed',
            width: '2rem',
            height: '2rem',
            right: '0.5rem',
            borderRadius: '0.3rem',
            bottom: '.9rem',
            zIndex: '999',
            background: 'rgba(0, 0, 0, 0.4) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAkBAMAAADx8p7SAAAAKlBMVEUAAAD+/v7//f7//f7+/f3//////v///////v///////v///P3//v7///8rNLtqAAAADXRSTlMA/NocCb9OcbXoz4VlIaFugwAAAIlJREFUKM/tyrENg1AMRVFLKdKmSpcR0mSCDJEBskikjMAQtEi0bEAJBaLyLoDvt54EK/Aq++pY2eVZ224vn95cQu6fPfLChEYvTOjuM0zo68MvmJD5cA0mtCYLJrQlWKJIsEQkGIgUTIgEA5FgIFKyZkMk2N8CkWCV9aBM/ErsTIf0uB1S1+a1AEa7aZ7PHZ7sAAAAAElFTkSuQmCC) no-repeat center',
            backgroundSize: '40% 40%'
        };

        return (
            <a href="javascript:;" className="backtop" style={style} onClick={this.backtop} ref="backtop"></a>
        )
    }
});

export default Backtop;
