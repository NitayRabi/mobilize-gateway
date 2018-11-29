import express from 'express';

export class GroupsRouter {

    constructor(services) {
        this.prefix = 'groups';
        this.services = services;
        this.express = express.Router();
        this.init();
    }

    init() {
        console.log('Starting groups router...');
        this.express.route('/').get(async (req, res, next) => {
            try {
                const mobiData = await this.services.mobilize.getGroups(req.query);
                return next(mobiData);
            } catch (e) {
                let content = this.services.parsing.parseMobiError(e);
                return next(content);
            }
        });
        this.express.route('/:id').get(async (req, res, next) => {
            try {
                const mobiData = await this.services.mobilize.getGroup(req.params.id, req.query);
                return next(mobiData);
            } catch (e) {
                let content = this.services.parsing.parseMobiError(e);
                return next(content);
            }
        });
        this.express.route('/:id/members').get(async (req, res, next) => {
            try {
                const mobiData = await this.services.mobilize.getMembers(req.params.id, req.query);
                return next(mobiData);
            } catch (e) {
                let content = this.services.parsing.parseMobiError(e);
                return next(content);
            }
        });
        this.express.route('/:id/members/:uid').get(async (req, res, next) => {
            try {
                const mobiData = await this.services.mobilize.getMember(req.params.id, req.params.uid, req.query);
                return next(mobiData);
            } catch (e) {
                let content = this.services.parsing.parseMobiError(e);
                return next(content);
            }
        });
    }

}